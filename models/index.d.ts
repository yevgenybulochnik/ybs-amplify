import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class TestModel {
  readonly id: string;
  readonly testfield?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TestModel>);
  static copyOf(source: TestModel, mutator: (draft: MutableModel<TestModel>) => MutableModel<TestModel> | void): TestModel;
}

export declare class NewModel {
  readonly id: string;
  readonly testfield?: string;
  readonly somefield?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<NewModel>);
  static copyOf(source: NewModel, mutator: (draft: MutableModel<NewModel>) => MutableModel<NewModel> | void): NewModel;
}