import { addNewLaunch, getAllLaunches, existLaunch, abortedLaunchById, scheduleLaunch } from '../../models/launches.model';
export async function httpGetAllLaunches(req, res){
  return res.status(200).json(await getAllLaunches());
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
  scheduleLaunch(launch);
  return res.status(201).json(launch);
}

export const httpAbortLaunch = async (req, res)=>{
  const launchId = Number(req.params.id);

  const existLaunches = await existLaunch(launchId);
  if(!existLaunches){
    return res.status(404).json({
      error: 'Not Found'
    });
  }
  const aborted = await abortedLaunchById(launchId);
  return res.status(200).json(aborted);
}

