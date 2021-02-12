
/* eslint-disable no-mixed-operators*/
export default function compassPoint(degree) {
 
  let direction = "N";
  if (23.5 <= degree < 67.5) {
    direction = "NE";
  } else if (67.5 <= degree < 112.5) {
    direction = "E";
  } else if (112.5 <= degree < 157.5) {
    direction = "SE";
  } else if (157.5 <= degree < 202.5) {
    direction = "S";
  } else if (202.5 <= degree < 247.5) {
    direction = "SW";
  } else if (247.5 <= degree < 292.5) {
    direction = "W";
  } else if (292.5 <= degree < 337.5) {
    direction = "NW";
  }
  
  return direction;
  
}