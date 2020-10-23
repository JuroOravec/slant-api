abstract class Model {
  abstract serialize(instance: any): any;
  abstract deserialize(data: any): any;
}

export { Model };
