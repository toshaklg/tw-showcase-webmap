import axios from 'axios'

export function requestCapabilites(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        console.log(error)
        reject(error)
      })
  })
}


export function getDatesFromWmts(url) {
  const getUrl = "https://ows.digitalearth.africa/wmts?request=GetCapabilities&service=WMTS&version=1.0.0"

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(function (response) {
        let dates = []

        const parser = new DOMParser()
        const getCapabilitiesXML = parser.parseFromString(response.data, "application/xml")
        const dimensions = getCapabilitiesXML.getElementsByTagName("Dimension")

        for (let i = 0; i < dimensions.length; i++) {
          const dimension_name = dimensions[i].parentNode.getElementsByTagName("Name")[0].textContent

          if (dimension_name === wms_layer_name) {
            let _dates = dimensions[i].textContent
            _dates = _dates.split(",")
            _dates.forEach(_date => {
              dates.push(new Date(_date).toISOString())
            });
          }
        }
        resolve(dates)
      }).catch(function (error) {
        console.log(error)
        reject(error)
      })
  })
}