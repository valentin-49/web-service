<template>
  <GMapMap
      :center="center"
      :zoom="15"
      map-type-id="terrain"
      style="width: 261px; height: 170px; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: 'googleMap',
  data() {
    return {
      center: {lat: 47.067348943597366, lng: -0.8891958286545966},
      markers: [
        {
          position: {
            lat: 47.067348943597366, lng: -0.8891958286545966
          },
        }
        , // Along list of clusters
      ]
    }
  }
}
</script>