import axios from 'axios'
import xpath from 'xpath'

export function requestCapabilites(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(function (response) {
        let xml = new DOMParser().parseFromString(response.data, "application/xml")
        resolve(xml)
      }).catch(function (error) {
        console.log(error)
        reject(error)
      })
  })
}

export function parseDimensionFromCapabilities(cXML, layer) {
  var select = xpath.useNamespaces({
    "std": "http://www.opengis.net/wms",
    "xlin": "http://www.w3.org/1999/xlink",
    "xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "dea": "http://dea.ga.gov.au/namespaces/wms_extensions",
  })

  let dimension = select(`//std:Layer[std:Name[text()='${layer}']]/std:Dimension`, cXML, true)
  if (typeof dimension === "undefined") {
    return []
  }
  let dates = dimension.textContent.trim().split(",")

  console.log(dates)
  return dates
}