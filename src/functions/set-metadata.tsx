interface IMetaProps {
  title: string;
  description: string;
}

export function setMetadata(props: IMetaProps) {
  return (
    <head>
      <title>{props.title} . Boilerplate - Micro SaaS</title>
      <meta name="description" content={props.description} />
    </head>
  );
}