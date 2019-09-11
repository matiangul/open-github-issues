export interface GithubIssue {
  title: string;
  html_url: string;
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  labels: [{ name: string }];
  body: string;
  created_at: string;
}

export interface GithubIssuesResponse {
  items: GithubIssue[];
}
