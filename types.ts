export interface Article {
  title: string
  id: string
  file: string,
  style: string,
  images: string[],
  image:string ,
  date: string,
  description: string, 
}
export interface APIresponse {
  kind: string
  etag: string
  selfLink: string
  incompleteSearch: boolean
  items: Item[]
}

export interface Item {
  kind: string
  id: string
  etag: string
  selfLink: string
  alternateLink: string
  embedLink: string
  iconLink: string
  thumbnailLink: string
  title: string
  mimeType: string
  labels: Labels
  copyRequiresWriterPermission: boolean
  createdDate: string
  modifiedDate: string
  markedViewedByMeDate: string
  version: string
  parents: Parent[]
  exportLinks: ExportLinks
  userPermission: UserPermission
  quotaBytesUsed: string
  ownerNames: string[]
  owners: Owner[]
  lastModifyingUserName: string
  lastModifyingUser: LastModifyingUser
  capabilities: Capabilities
  editable: boolean
  copyable: boolean
  writersCanShare: boolean
  shared: boolean
  explicitlyTrashed: boolean
  appDataContents: boolean
  spaces: string[]
  webContentLink?: string
}

export interface Labels {
  starred: boolean
  hidden: boolean
  trashed: boolean
  restricted: boolean
  viewed: boolean
}

export interface Parent {
  kind: string
  id: string
  selfLink: string
  parentLink: string
  isRoot: boolean
}

export interface ExportLinks {
  "application/rtf": string
  "application/vnd.oasis.opendocument.text": string
  "text/html": string
  "application/pdf": string
  "application/epub+zip": string
  "application/zip": string
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": string
  "text/plain": string
}

export interface UserPermission {
  kind: string
  etag: string
  id: string
  selfLink: string
  role: string
  type: string
}

export interface Owner {
  kind: string
  displayName: string
  isAuthenticatedUser: boolean
  permissionId: string
  emailAddress: string
}

export interface LastModifyingUser {
  kind: string
  displayName: string
  isAuthenticatedUser: boolean
  permissionId: string
  emailAddress: string
}

export interface Capabilities {
  canCopy: boolean
  canEdit: boolean
}

export interface Component {
  head: string;
  tail:string;
}
export type language = "javaScript" | "HTML"

export interface Project {
  title:string;
  description:string
  githubUrl: string
}
export interface FullProject {
  description: string;
  id: string;
  title: any;
  githubUrl: string;
  fullUrl: string;
  type: string;
  zip: any;
  demoUrl: string;
}

export interface ZipEntry {
  entryName: string;
  name: string;
  comment: string;
  isDirectory: boolean;
  toString: ()=> string;
}
export interface GithubLangResp {
  [language: string]: number;
}

export interface ADMZipClasss {
  branch?: string;
  getEntries: ()=>ZipEntry[];
  extractEntryTo: (  targetPath: string,  maintainEntryPath?: boolean, overwrite?: boolean)=> void;
   extractAllTo : ( targetPath: string,  overwrite?: boolean) => void;
}