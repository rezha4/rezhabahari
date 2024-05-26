const BlogPost = ({ props }: { props: { id: string } }) => {
  return <div>blog={props.id}</div>;
};

export default BlogPost;
