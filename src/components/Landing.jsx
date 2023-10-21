const Landing = () => {
  return (
    <section>
      <div className="container flex items-center flex-col gap-[30px]">
        <div>
          <img src="/src/assets/images/illustration-intro.png" alt="img" />
        </div>
        <div className="text-center">
          <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
            All your files in one secure location, <br></br>
            accessible anywhere ,
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsum,
            cum dolor ut voluptates iste, nostrum atque incidunt reiciendis
            cupiditate of
          </p>
        </div>
        <div>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
