var APP_DATA = {
  "scenes": [
    {
      "id": "0-pieni-silta",
      "name": "Pieni silta",
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
        "yaw": 2.7034372542157534,
        "pitch": -0.18050873502787823,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18291445466827838,
          "pitch": 0.10472218419962154,
          "rotation": 0,
          "target": "1-mets"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.603456975716913,
          "pitch": 0.1489209983108708,
          "title": "Polku",
          "text": "<p style=\"margin-bottom: 0cm; line-height: 100%\">Luontopolun pituus on 1,3 km ja sen kulkemiseen kannattaa varata\naikaa ainakin tunti.</p><p style=\"margin-bottom: 0cm; line-height: 100%\"><br></p>"
        }
      ]
    },
    {
      "id": "1-mets",
      "name": "Metsä",
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
          "yaw": -2.6632997950820254,
          "pitch": 0.224956712488682,
          "rotation": 3.141592653589793,
          "target": "0-pieni-silta"
        },
        {
          "yaw": 0.6129671028413348,
          "pitch": 0.15789208489877282,
          "rotation": 0,
          "target": "2-nuotiopaikka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-nuotiopaikka",
      "name": "Nuotiopaikka",
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
          "yaw": -0.08017070323188236,
          "pitch": -0.1579270601229137,
          "rotation": 0,
          "target": "1-mets"
        },
        {
          "yaw": -1.469555004644155,
          "pitch": 0.1607594917783608,
          "rotation": 0,
          "target": "3-polku"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.43190874059337503,
          "pitch": 0.1638061500125616,
          "title": "Portaat",
          "text": "Polulla on korkeuseroja. Jyrkimpiin paikkoihin on rakennettu portaat kulkua helpottamaan."
        }
      ]
    },
    {
      "id": "3-polku",
      "name": "Polku",
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
        "yaw": 2.4601759120861093,
        "pitch": -0.013168780308166816,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4147030467615274,
          "pitch": 0.12081109771026277,
          "rotation": 0,
          "target": "4-ermaassa-konttivuorella"
        },
        {
          "yaw": -0.8535221352002154,
          "pitch": 0.10794085301882106,
          "rotation": 3.141592653589793,
          "target": "2-nuotiopaikka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ermaassa-konttivuorella",
      "name": "Erämaassa Konttivuorella",
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
          "yaw": 1.631619439561688,
          "pitch": 0.3266687320964117,
          "rotation": 1.5707963267948966,
          "target": "5-suopursun-maa"
        },
        {
          "yaw": -0.18892826533386042,
          "pitch": 0.43092659513440523,
          "rotation": 3.141592653589793,
          "target": "3-polku"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-suopursun-maa",
      "name": "Suopursun maa",
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
          "yaw": 2.2443352890527493,
          "pitch": 0.2726093341754119,
          "rotation": 0.7853981633974483,
          "target": "4-ermaassa-konttivuorella"
        },
        {
          "yaw": 0.24925783053551598,
          "pitch": 0.3502612197539694,
          "rotation": 0,
          "target": "6-jklt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-jklt",
      "name": "Jäkälät",
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
          "yaw": 2.3552854258716582,
          "pitch": 0.39841674236594393,
          "rotation": 1.5707963267948966,
          "target": "7-kivien-maa"
        },
        {
          "yaw": 0.9790819581034746,
          "pitch": 0.1167818835293346,
          "rotation": 5.497787143782138,
          "target": "5-suopursun-maa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kivien-maa",
      "name": "Kivien maa",
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
        "yaw": 0.6732107233350728,
        "pitch": -0.12058336446142093,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8543772696899943,
          "pitch": 0.4340411927962542,
          "rotation": 0,
          "target": "8-portaat"
        },
        {
          "yaw": 0.7618963051012226,
          "pitch": 0.14470695201563366,
          "rotation": 0,
          "target": "6-jklt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-portaat",
      "name": "Portaat",
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
          "yaw": -2.29845893185459,
          "pitch": 0.2754774667231601,
          "rotation": 5.497787143782138,
          "target": "7-kivien-maa"
        },
        {
          "yaw": 0.6459760046140559,
          "pitch": 0.27823938553763483,
          "rotation": 3.141592653589793,
          "target": "9-polku-metsss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-polku-metsss",
      "name": "Polku metsässä",
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
          "yaw": 2.4024334490332357,
          "pitch": 0.2131816701818181,
          "rotation": 5.497787143782138,
          "target": "8-portaat"
        },
        {
          "yaw": -1.4278559233246728,
          "pitch": 0.1891416186474082,
          "rotation": 0.7853981633974483,
          "target": "10-kalliolla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-kalliolla",
      "name": "Kalliolla",
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
        "yaw": -2.3248489987550442,
        "pitch": 0.021033420394537927,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.054837352083794144,
          "pitch": 0.3840563736338023,
          "rotation": 4.71238898038469,
          "target": "9-polku-metsss"
        },
        {
          "yaw": 0.9531022378786389,
          "pitch": 0.3630660231582894,
          "rotation": 1.5707963267948966,
          "target": "11-aivan-lhell"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-aivan-lhell",
      "name": "Aivan lähellä",
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
        "yaw": -0.34216438897237467,
        "pitch": -0.0038493476437242435,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.136812055674378,
          "pitch": 0.1653669663062569,
          "rotation": 5.497787143782138,
          "target": "10-kalliolla"
        },
        {
          "yaw": 2.640826883201708,
          "pitch": 0.13996136929597114,
          "rotation": 0,
          "target": "12-laavu"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4833629577213294,
          "pitch": 0.10763466362398333,
          "title": "Kuivakäymälä",
          "text": "Kuivakäymälä on tässä."
        },
        {
          "yaw": -2.1091690884151966,
          "pitch": 0.23453099488130036,
          "title": "Tässä",
          "text": "Polun varrella on mainio laavu jossa on polttopuutkin valmiina."
        }
      ]
    },
    {
      "id": "12-laavu",
      "name": "Laavu",
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
        "yaw": -1.48075454343752,
        "pitch": 0.034318094678207345,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8137091254137072,
          "pitch": 0.26595911034507225,
          "rotation": 0.7853981633974483,
          "target": "11-aivan-lhell"
        },
        {
          "yaw": 2.6065345770492554,
          "pitch": 0.18997954081669555,
          "rotation": 1.5707963267948966,
          "target": "0-pieni-silta"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.10231046599018967,
          "pitch": 0.5872070000076981,
          "title": "Hyvät vierailijat",
          "text": "Sen minkä jaksat metsään kantaa, jaksat myös kantaa pois. Eli ethän roskaa luontoa, kiitos!"
        }
      ]
    }
  ],
  "name": "Konttivuoren luontopolku",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
