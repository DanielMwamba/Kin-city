import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  BookOpenIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  
} from "@heroicons/react/24/solid";
 
function Sidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          KIN-CITY
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <BookOpenIcon className="h-5 w-5" />
          </ListItemPrefix>
         Histoire
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserGroupIcon className="h-5 w-5" />
          </ListItemPrefix>
         Cuture
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BuildingOfficeIcon className="h-5 w-5" /> 
          </ListItemPrefix>
          Communes
          <ListItemSuffix>
            <Chip value="24" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <MapPinIcon className="h-5 w-5" />
          </ListItemPrefix>
          Lieux Historique
        </ListItem>
        
      
      </List>
    </Card>
  );
}

export default Sidebar