import {
  Viewer,
  Entity as REntity,
  PointGraphics,
  EntityDescription,
} from 'resium';
import { Cartesian3 } from 'cesium';

const nearMapOfficePosition = Cartesian3.fromDegrees(
  151.20282711872622,
  -33.85669265386245,
  100,
);

export function Entity() {
  return (
    <Viewer>
      <REntity position={nearMapOfficePosition} name="Sydney">
        <PointGraphics pixelSize={10} />
        <EntityDescription>
          <p style={{ color: 'black' }}>This is the Nearmap office</p>
        </EntityDescription>
      </REntity>
    </Viewer>
  );
}
