const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              src="/src/assets/images/illustration-intro.png"
              alt="img"
              className="w-full h-fit"
            />
          </div>
          <div className="text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location, <br></br>
              accessible anywhere ,
            </h1>
            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full md:mx-auto mb-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              ipsum, cum dolor ut voluptates iste, nostrum atque incidunt
              reiciendis cupiditate of
            </p>
          </div>
          <div className="btn w-[280px] h-[60px] rounded-[30px] text-center element-center mx-auto font-medium">
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div>
        <img src="/src/assets/images/bg-curvy-desktop.svg" alt="cyrvy image" className="bg-red-600 w-full h-full" />
      </div>
    </section>
  );
};

export default Landing;
