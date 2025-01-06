<script>
    import * as Plot from "@observablehq/plot";
    import * as d3 from "d3";
    import { feature } from "topojson-client";
    import { onMount } from "svelte";

    let land = {}; 
    let locPlot = []; 
    let rotate = 0; 
    const globeWidth = 720;
    let isDragging = false;
    let startX = 0;
    const baseUrl = window.location.hostname === "localhost" ? "" : "/antarctic-aliens";
    
    function handleDragStart(event) {
        isDragging = true;
        startX = event.clientX;
    }

    function handleDragMove(event) {
        if (!isDragging) return;

        const deltaX = event.clientX - startX;
        const rotationSensitivity = 0.5;
        
        rotate += deltaX * rotationSensitivity;
        rotate = (rotate + 360) % 360;
        
        startX = event.clientX;
        renderBubbleMap();
    }

    function handleDragEnd() {
        isDragging = false;
        renderBubbleMap();
    }

    function renderBubbleMap() {
        const bubbleMap = Plot.plot({
            width: globeWidth, 
            height: globeWidth,
            projection: { 
                type: "orthographic", 
                rotate: [rotate, 60, 15]
            },
            marks: [
                Plot.graticule({ stroke: "black", strokeWidth: 1 }),
                Plot.sphere({ fill: "#AED6EA", fillOpacity: 0.25, stroke: "black" }), 
                Plot.geo(land, {
                    fill: "white",
                    stroke: "black", 
                    strokeOpacity: 0.25,
                    strokeWidth: 1,
                }),
                Plot.dot(locPlot, {
                    x: "long",
                    y: "lat",
                    r: "count",
                    fill: "orange", 
                    fillOpacity: 0.1, 
                    stroke: "orange",
                }),
                Plot.tip(
                    locPlot,
                    Plot.pointer({
                        x: "long",
                        y: "lat",
                        title: (d) => `${d.locality} - ${d.count}`,
                        fill: "black", 
                        stroke: "black",
                        fontSize: 12,
                        fontWeight: "bold"
                    })
                )
            ]
        });
        
        const container = document.getElementById("vis");
        container.innerHTML = ""; // Clear previous plot
        container.appendChild(bubbleMap);
    }

    onMount(async () => {
        // Your existing data loading code
        const land50m = await fetch("/antarctic-aliens/src/data/land-50m.json").then((res) => res.json()); 
        land = feature(land50m, land50m.objects.land);

        const data = await d3.csv("/antarctic-aliens/src/data/AA-Final.csv");

        locPlot = Array.from(
            d3.group(data, d => `${d.locality}|${d.lat}|${d.long}`), 
            ([key, value]) => {
                const [locality, lat, long] = key.split('|');
                return {
                    locality,
                    lat: +lat,
                    long: +long,
                    count: value.length
                };
            }
        );

        renderBubbleMap();
    });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
    id="vis" 
    on:mousedown={handleDragStart}
    on:mousemove={handleDragMove}
    on:mouseup={handleDragEnd}
    on:mouseleave={handleDragEnd}
></div>

<style>
    #vis {
        cursor: grab;
        user-select: none;
    }

    #vis:active {
        cursor: grabbing;
    }
</style>