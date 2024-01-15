import axios from 'axios'
import xpath from 'xpath'

export function requestCapabilites(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(function (response) {
        let xml = new DOMParser().parseFromString(response.data, "application/xml")
        resolve(xml)
      }).catch(function (error) {
        console.error(error)
        reject(error)
      })
  })
}

export function parseDimensionFromCapabilities(cXML, layer) {
  let dates = []
  let bbox = []

  var select = xpath.useNamespaces({
    "std": "http://www.opengis.net/wms",
    "xlin": "http://www.w3.org/1999/xlink",
    "xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "dea": "http://dea.ga.gov.au/namespaces/wms_extensions",
  })

  let dimension = select(`//std:Layer[std:Name[text()='${layer}']]/std:Dimension`, cXML, true)
  if (typeof dimension !== "undefined") {
    dates = dimension.textContent.trim().split(",")
  }

  let boundingBox = select(`//std:Layer[std:Name[text()='${layer}']]/std:BoundingBox[@CRS='EPSG:3857']`, cXML, true)
  if (typeof boundingBox !== "undefined") {
    bbox = [
      parseFloat(boundingBox.getAttribute("minx")),
      parseFloat(boundingBox.getAttribute("maxx")),
      parseFloat(boundingBox.getAttribute("miny")),
      parseFloat(boundingBox.getAttribute("maxy")),
    ]
  }

  return [dates, bbox]
}

export function getCenter(bbox) {
  const x = (bbox[0] + bbox[1]) / 2
  const y = (bbox[2] + bbox[3]) / 2
  return [x, y]
}