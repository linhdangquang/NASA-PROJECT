const {getAllPlanets} = require ('../../models/planets.model');
function httpGetAllPlanets(req, res) {
   res.status(200).json(getAllPlanets())
}
export default httpGetAllPlanets;