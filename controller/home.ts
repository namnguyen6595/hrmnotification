import { WebClient } from "@slack/web-api";
import fs from 'fs'

interface UserGroup {
  id?: string;
  team_id?: string;
  is_usergroup?: boolean;
  is_subteam?: boolean;
  name?: string;
  description?: string;
  handle?: string;
  is_external?: boolean;
  date_create?: number;
  date_update?: number;
  date_delete?: number;
  auto_provision?: boolean;
  enterprise_subteam_id?: string;
  created_by?: string;
  updated_by?: string;
  prefs?: any;
  channel_count?: number;
}

// const ignoreList = 

const web = new WebClient(process.env.SLACK_AUTH_TOKEN)
let listMembers = ["acon_all", "cpay_all", "csplusbase", "plus_all", "pms_all", "scalops_all", "front_all", "pcam_all", "designers_all", "cs-sbsf", "canhacanhsat", "opsmodulelead", "csqa", "pqa-ops", "xpanda_dropship", "pod_sourcings_all", "rnd", "marketers_all", "csmhn", "saleshn", "finance_all", "growth_all", "hr_all", "chan_all"]
// const listMembersGroup = []
const nextCheckin = new Date()
nextCheckin.setHours(16, 30, 0, 0)
const listGroupMembers = async () => {
  try {
    const result = await web.usergroups.list()
    let dataUsergroupHasAll = []
    if (result.usergroups) {
      dataUsergroupHasAll = result.usergroups.filter((item: any) => listMembers.indexOf(item.handle) > -1)
      console.log(dataUsergroupHasAll.length)
      fs.writeFile('usergroups.json', JSON.stringify(dataUsergroupHasAll), () => { })
    }
  } catch (error) {
    console.log(error)
  }
}
// const initial = async (userId: string) => {
//   try {
//     await web.chat.postMessage({
//       channel: 'C0204M3QN3C',
//       // text: `<@${userId}> Check in/Check out ngày ${new Date().getDate()}/${new Date().getMonth()}`,
//       // post_at: "" + Number.parseInt(`${(nextCheckin.getTime() / 1000)}`)
//       text: `Thèm thuốc quá nhỉ`,
//     })
//     console.log("message posted")
//   } catch (err) {
//     console.log("error", err)
//   }
// };

// listMembers.map(item => {
//   initial(item)
// })

// listGroupMembers()

// https://hooks.slack.com/services/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

