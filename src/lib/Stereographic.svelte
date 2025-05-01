<script>
    import * as Plot from "@observablehq/plot";
    import * as d3 from "d3";
    import { feature } from "topojson-client";
    import { onMount } from "svelte";

    let land = {}; 
    let locPlot = []; 
    let rotate = 0; 
    let antarctic = d3.geoCircle().center([0, -90]).radius(60)();
    let mapWidth = 1080;

    function renderMap() {
        const bubbleMap = Plot.plot({
            width: 1080,
            height: 1080,
            projection: {
                type: "stereographic",
                rotate: [0, 90], 
                domain: antarctic
            }, 
            marks: [
                Plot.graticule({ stroke: "black", strokeWidth: 1 }),
                Plot.sphere({ fill: "#AED6EA", fillOpacity: 0.25 }),
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
                    stroke: "orange"
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
        container.innerHTML = ""; // Clears previous plot
        container.appendChild(bubbleMap);
    }

    onMount(async () => {
        // Load the topojson data
        const land50m = await fetch("/antarctic-aliens/data/land-50m.json").then((res) => res.json()); 
        land = feature(land50m, land50m.objects.land);

        // Load the CSV data
        const data = await d3.csv("/antarctic-aliens/data/AA-Final.csv");

        // Process data for visualization
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

        // Adjust container size to match map dimensions
        const container = document.getElementById("vis-container");
        container.style.width = `${mapWidth}px`;
        container.style.height = `${mapWidth}px`;

        renderMap();
    });
</script>

<div id="vis-container">
    <div id="vis"></div>
</div>

<style>
    #vis-container {
        border-radius: var(--radius-s);
        overflow: hidden;
        background: radial-gradient(47.71% 47.71% at 50% 50%, #FFF 80%, #FFF 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
    }

    #vis {
        /* No need for grab cursor since it's not interactive */
        user-select: none;
        width: 100%;
        height: 100%;
    }
</style>