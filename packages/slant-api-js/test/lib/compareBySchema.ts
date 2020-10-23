import Ajv from 'ajv';
// @ts-expect-error
import generateSchema from 'generate-schema'
import traverse from 'traverse';
import jsonSchemaV4 from 'ajv/lib/refs/json-schema-draft-04.json';

const compareBySchema = async (main: any, comparee: any) => {
  const expectedSchema = generateSchema.json(main);

  // Modify the schema to throw on additional properties
  traverse(expectedSchema).forEach(function (val) {
    if (val?.type !== 'object') return;
    val.additionalProperties = false;
  });

  // Add support for JSON schema v4, which is returned by 'generate-schema'
  const ajv = new Ajv({ schemaId: 'auto' });
  ajv.addMetaSchema(jsonSchemaV4);

  const valid = await ajv.validate(expectedSchema, comparee);
  const errors = ajv.errors ? [...ajv.errors] : [];
  return {
    valid,
    errors,
  };
};

export { compareBySchema };