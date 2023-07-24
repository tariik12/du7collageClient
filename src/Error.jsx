
const Error = () => {

    return (
        <div className='h-[600px]' style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(21, 21, 21, 0.2),rgba(21, 21, 21, 0.2)),
            url('https://st2.depositphotos.com/1006899/5283/i/950/depositphotos_52839753-stock-photo-error-illustration.jpg')`
          }}>
          
            <img className='mx-auto ' src="https://st2.depositphotos.com/1006899/5283/i/950/depositphotos_52839753-stock-photo-error-illustration.jpg" alt="" />
              <p className='text-center text-4xl font-extrabold text-red-600 '>  Not Fount Page</p>
        </div>
    );
};

export default Error;