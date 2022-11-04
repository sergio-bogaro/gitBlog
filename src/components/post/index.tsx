interface postProps {
  text: string;
  title: string;
  postLink: string;
  createdAt: string;
}

export function Post({ text, title, postLink, createdAt }: postProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{postLink}</p>
      <p>{createdAt}</p>
      <p>{text}</p>
    </div>
  );
}
