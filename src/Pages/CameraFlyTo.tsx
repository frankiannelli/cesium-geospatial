import { Cartesian3 } from 'cesium';
import { Viewer, Camera, CameraFlyTo as RCameraFlyTo } from 'resium';

const nearMapOfficePosition = Cartesian3.fromDegrees(
  151.20282711872622,
  -33.85669265386245,
  200,
);

export function CameraFlyTo() {
  return (
    <Viewer>
      <Camera />
      <RCameraFlyTo duration={5} destination={nearMapOfficePosition} />
    </Viewer>
  );
}
