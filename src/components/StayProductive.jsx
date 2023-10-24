const StayProductive = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="stay-productive-img"
          />
        </div>
        <div>
          <h3>
            Stay productive, <br></br>
            wherever you are
          </h3>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem neque, perspiciatis voluptas rem repellat delectus
              expedita nam eos ullam ex. At, nemo! Excepturi maiores quaerat
              perferendis vero doloribus, ipsum iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              reprehenderit! Sapiente non quae quis, ipsam quod quibusdam sed,
              nemo necessitatibus optio inventore deserunt dolorem laborum odit
              dolores, sunt possimus magnam.
            </p>
          </div>
          <a href="/">
            See how filo works
            <img
              src="/src/assets/images/icon-arrow.svg"
              alt="arrow-icon"
              className="object-contain w-[20px] h-[20px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
