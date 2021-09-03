function ProjectSection(props) {
  //   console.log(props.title);
  return (
    <div className="row flex flex-col-reverse md:flex-row mb-40 md:mb-0 md:items-center md:flex-grow">
      <div className="col-sm-12 col-lg-3 col-md-6  ">
        <div className="flex items-center">
          <div className="">
            <h3 className="text-2xl font-bold mt-10 md:mt-0">{props.title}</h3>
            <p className="mt-4 text-xl max-w-lg">{props.desc}</p>
            <a
              href={props.url}
              target="_blank"
              className="mt-10 text-left text-xl inline-block"
            >
              View the site &rarr;
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-3 col-md-6 col-lg-offset-2">
        <img alt="ibm logo" src={props.imgSrc} />
      </div>
    </div>
  );
}

export default ProjectSection;
