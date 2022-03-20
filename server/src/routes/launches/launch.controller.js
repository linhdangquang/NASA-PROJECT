import { addNewLaunch, getAllLaunches } from '../../models/launches.model';
export function httpGetAllLaunches(req, res){
  return res.status(200).json(getAllLaunches());
}

export const httpAddNewLaunch = (req, res)=>{
  const launch = req.body;

  if(!launch.mission || !launch.launchDate || !launch.rocket || !launch.target){
    return res.status(400).json({
      error: 'Bad Request'
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)){
    return res.status(400).json({
      error: 'Invalid Date'
    });
    
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

