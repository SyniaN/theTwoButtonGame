import * as shapeTypes from '../ShapeTypes';

const generateShape = () => {
    const typesKeys = Object.keys(shapeTypes);
    const index = Math.floor(Math.random() * typesKeys.length);
    const randomeShapeType = shapeTypes[typesKeys[index]];
    return randomeShapeType;
}

export default generateShape;