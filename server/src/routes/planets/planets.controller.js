const {habitablePlanets} = require ('../../models/planets.model');
function getAllPlanets(req, res) {
   res.status(200).json(habitablePlanets)
}
export default getAllPlanets;