/**
 * GITHUB API
 */

export const getRepository = (organization, repository) => {
  return `
  query {
    organization(login:"${organization}") {
      repository(name:"${repository}") {
        name,
        sshUrl,
        pullRequests(last:100, states:OPEN ) {
          nodes {
            title
            headRefName
            assignees(last:5) {
              nodes {
                avatarUrl
                name
                email
              }
            }
            suggestedReviewers{
              reviewer {
                avatarUrl
                name
                email
              }
            }
            # body
            # number
          }
        }
      }
    }
  }
  `;
};

export interface IRepository {
  data: Data;
}
interface Data {
  organization: Organization;
}
export interface Organization {
  repository: Repository;
}
export interface Repository {
  name: string;
  sshUrl: string;
  pullRequests: PullRequests;
}
export interface PullRequests {
  nodes: NodesItem[];
}
interface NodesItem {
  title?: string;
  headRefName?: string;
  assignees?: Assignees;
  suggestedReviewers?: SuggestedReviewersItem[];
  avatarUrl?: string;
  name?: string;
  email?: string;
}
export interface Assignees {
  nodes: NodesItem[];
}
interface SuggestedReviewersItem {
  reviewer: Reviewer;
}
export interface Reviewer {
  avatarUrl: string;
  name: null | string;
  email: string;
}
