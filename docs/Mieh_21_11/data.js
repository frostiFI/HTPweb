var APP_DATA = {
  "scenes": [
    {
      "id": "0-likolampi",
      "name": "Likolampi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4750573098041624,
          "pitch": 0.2520202822233042,
          "rotation": 0,
          "target": "1-miehinkisen-lintutorni"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-miehinkisen-lintutorni",
      "name": "Miehinkäisen lintutorni",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4342814377022366,
          "pitch": 0.3803558084024825,
          "rotation": 0,
          "target": "0-likolampi"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Miehinkäisen luontopolku talvella ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
