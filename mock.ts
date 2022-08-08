import { Types } from './lib/types'
import { faker } from '@faker-js/faker'
import { Utils } from './lib/utils'
const { Arrays } = Utils
const { Random } = Utils

export namespace Mocking {
  export const _prompts: Array<Types.Prompt> = Arrays.fill(5, () => {
    return {
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(),
      text: faker.lorem.words(Math.floor(Math.random() * 80)),
      title: faker.music.songName(),
      image: faker.image.nature()
    }
  })

  export const _users: Array<Types.User> = Arrays.fill(5, () => {
    return {
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar()
    }
  })

  export const _badges: Array<Types.Badge> = Arrays.fill(5, () => {
    return {
      id: faker.datatype.uuid(),
      promptId: Arrays.choice(_prompts.map(p => p.id)),
      text: faker.word.noun(Random.rInt(4))
    }
  })

  export const _posts: Array<Types.Post> = Arrays.fill(5, () => {
    return {
      id: faker.datatype.uuid(),
      promptId: Arrays.choice(_prompts.map(p => p.id)),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      title: `${faker.word.adverb()} ${faker.word.preposition()} ${faker.word.interjection()} ${faker.word.adjective()} ${faker.word.noun()}`,
      text: faker.lorem.paragraphs(Random.rInt(3, 12)),
      authorId: Arrays.choice(_users.map(u => u.id)),
      published: Arrays.choice([true, false])
    }
  })

  export const _comments: Array<Types.Comment> = Arrays.fill(5, () => {
    return {
      id: faker.datatype.uuid(),
      promptId: Arrays.choice(_prompts.map(p => p.id)),
      authorId: Arrays.choice(_users.map(u => u.id)),
      text: faker.lorem.sentences(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  })

  export const _workspaceSettings: Array<Types.WorkspaceSettings> = Arrays.fill(5, () => {
    return {
      id: faker.datatype.uuid(),
      backgroundImage: faker.image.nature(),
      backgroundImageOpacity: 40,
      textColor: faker.internet.color(),
      ownerId: Arrays.choice(_users.map(u => u.id))
    }
  }
  )

  export const _circles: Array<Types.Circle> = Arrays.fill(5, () => {
    return {
      id: faker.datatype.uuid(),
      name: `${faker.word.adverb()} ${faker.word.noun()}`,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      bannerImage: Arrays.choice([
        faker.image.abstract(),
        faker.image.nature(),
        faker.image.cats(),
        faker.image.city(),
        faker.image.animals(),
        faker.image.unsplash.imageUrl(),
      ]),
      creatorId: Arrays.choice(_users.map(u => u.id)),
      description: faker.lorem.text()
    }
  })

  export const data = {
    users: _users,
    circles: _circles,
    prompts: _prompts,
    posts: _posts,
    comments: _comments,
    badges: _badges,
    settings: _workspaceSettings
  }
}