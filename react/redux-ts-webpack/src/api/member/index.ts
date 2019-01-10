import {MemberEntity} from '../../model'
import { members } from './mockData'

// 组件划分的粒度， 循环， 每个都可以做一个组件
// 函数式组件<prop>({member})
const baseURL = 'https://api.github.com/orgs/lemoncode'

const fecthMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members)
}

const fecthMembersAsync = (): Promise<MemberEntity[]> => {
  const membersURL = `${baseURL}/members`
  return fetch(membersURL)
          .then(res => res.json())
          .then(mapToMembers);

}
const mapToMembers = (res: any[]):MemberEntity[] => {
  return res.map(mapToMember)
}
const mapToMember = (member) => {
  return {
    id: member.id,
    login: member.login,
    avatar_url: member.avatar_url
  }
}
export const memberAPI = {
  fecthMembers,
  fecthMembersAsync
}

export const saveMember = (member: MemberEntity): Promise<boolean> => {
  // insertMember(member);
  return Promise.resolve(true);
}

// const insertMember = (member: MemberEntity) => {
//   member.id = members.length
//   member = {
//     ...members,
//     member
//   }
// } 