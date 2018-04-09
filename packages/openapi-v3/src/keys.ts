import {MetadataAccessor} from '@loopback/context';
import {RestEndpoint, ControllerSpec} from '.';
import {ParameterObject, RequestBodyObject} from '@loopback/openapi-v3-types';

// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/openapi-v3
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export namespace OAI3Keys {
  export const METHODS_KEY = MetadataAccessor.create<
    Partial<RestEndpoint>,
    MethodDecorator
  >('openapi-v3:methods');
  export const PARAMETERS_KEY = MetadataAccessor.create<
    ParameterObject,
    ParameterDecorator
  >('openapi-v3:parameters');
  export const CLASS_KEY = MetadataAccessor.create<
    ControllerSpec,
    ClassDecorator
  >('openapi-v3:class');
  export const CONTROLLER_SPEC_KEY = MetadataAccessor.create<
    ControllerSpec,
    ClassDecorator
  >('openapi-v3:controller-spec');
  export const REQUEST_BODY_KEY = MetadataAccessor.create<
    RequestBodyObject,
    ParameterDecorator
  >('openapi-v3:request-body');
}
