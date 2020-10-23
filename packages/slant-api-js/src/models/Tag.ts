import { Model } from '../lib/Model';

interface TagDataRaw {
  type: string;
  class: string;
  uuid: string;
  id: string;
  name: string;
  isCommunity: boolean;
  count: string;
  localId: string;
}

interface TagData extends Omit<TagDataRaw, 'count'> {
  count: number;
}

class Tag extends Model implements TagData {
  type: TagData['type'];
  class: TagData['class'];
  uuid: TagData['uuid'];
  id: TagData['id'];
  name: TagData['name'];
  isCommunity: TagData['isCommunity'];
  count: TagData['count'];
  localId: TagData['localId'];

  constructor(data: Tag | TagDataRaw) {
    super();
    const tagData = data instanceof Tag
      ? data
      : this.deserialize(data);

    this.type = tagData.type;
    this.class = tagData.class;
    this.uuid = tagData.uuid;
    this.id = tagData.id;
    this.name = tagData.name;
    this.isCommunity = tagData.isCommunity;
    this.count = tagData.count;
    this.localId = tagData.localId;
  }

  serialize(): TagDataRaw {
    return {
      type: this.type,
      class: this.class,
      uuid: this.uuid,
      id: this.id,
      name: this.name,
      isCommunity: this.isCommunity,
      count: this.count.toString(),
      localId: this.localId,
    };
  }

  deserialize(data: TagDataRaw): TagData {
    return {
      ...data,
      count: Number.parseInt(data.count),
    };
  }
}

export { Tag, TagData, TagDataRaw };