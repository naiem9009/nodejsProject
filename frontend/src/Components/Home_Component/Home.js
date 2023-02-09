/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

function Home() {
  return (
    <div>
    <section>
        <div id="homeSlider" className="carousel slide position-relative" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#homeSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                <li data-bs-target="#homeSlider" data-bs-slide-to="1" aria-label="Second slide"></li>
                <li data-bs-target="#homeSlider" data-bs-slide-to="2" aria-label="Third slide"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img src="./images/blood2.jpg" className="w-100 d-block" alt="First slide"/>

                </div>
                <div className="carousel-item">
                    <img src="./images/blood1.jpg" className="w-100 d-block" alt="Second slide"/>

                </div>
                <div className="carousel-item">
                    <img src="./images/blood3.jpg" className="w-100 d-block" alt="Third slide"/>

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeSlider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeSlider" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>



            <div className="row position-absolute start-50 d-none d-md-none d-lg-block" style={{top: "150px"}}>
                <div className="col-12">
                    <div className="card p-3">
                        <h4 className="card-header bg-transparent text-danger">Login Now</h4>
                        <div className="card-body text-dark">
                            <form action="">
                                <div className="mb-3">      
                                    <label for="" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="" id="" aria-describedby="helpId"placeholder="Enter your Email..."/>
      
                                    <label for="" className="form-label mt-3">Password</label>
                                    <input type="password" className="form-control" name="password" id="" aria-describedby="helpId"placeholder="Enter your password..."/>
                                    <small id="helpId" className="form-text text-muted">
                                        Do not share your password anyone
                                    </small>
      
                                    <input type="submit" className="form-control btn btn-secondary mt-4" name="" id="" value="Login"/>
                                  </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
    <section className="mt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-6 text-success">
                    <h3 className="text-center text-danger mb-5">কেন রক্তদান করবেন?</h3>
                    <p>১. প্রথম এবং প্রধান কারণ, আপনার দানকৃত রক্ত একজন মানুষের জীবন বাঁচাবে। রক্তদানের জন্য এর থেকে বড় কারণ আর কি হতে পারে !</p>
                    <p>২. হয়তো একদিন আপনার নিজের প্রয়োজনে/বিপদে অন্য কেউ এগিয়ে আসবে।</p>
                    <p>৩. নিয়মিত রক্তদানে হৃদরোগ ও হার্ট অ্যাটাকের ঝুঁকি অনেক কম।</p>
                    <p>৪. নিয়মিত স্বেচ্ছায় রক্তদানের মাধ্যমে বিনা খরচে জানা যায় নিজের শরীরে বড় কোনো রোগ আছে কিনা। যেমন : হেপাটাইটিস-বি, হেপাটাইটিস-সি, সিফিলিস, এইচআইভি (এইডস) ইত্যাদি।</p>
                    <p>৫. দেহের রোগ প্রতিরোধ ক্ষমতা অনেকগুন বেড়ে যায়।</p>
                    <p>৬. রক্তদান ধর্মীয় দিক থেকে অত্যন্ত পুণ্যের বা সওয়াবের কাজ। পবিত্র কোরআনের সূরা মায়েদার ৩২ নং আয়াতে আছে, ‘একজন মানুষের জীবন বাঁচানো সমগ্র মানব জাতির জীবন বাঁচানোর মতো মহান কাজ।’</p>
                    <p>৭. নিজের মাঝে একধরনের আত্মতৃপ্তি উপলব্ধি করতে পারবেন । "আমাদের ছোট পরিসরের এই জীবনে কিছু একটা করলাম" এই অনুভুতি আপনার মনে জাগ্রত হবে এই ব্যাপারে নিশ্চিত করছি :)</p>
                </div>

                <div className="col-6">
                    <h3 className="text-center text-danger mb-5">কিছু ভুল ধারনা </h3>
                    <p>১. রক্ত দান করার সময় মোটেও ব্যথা লাগে না। শুধূমাত্র সূচ ফোটানোর সময় অল্প একটু অস্বস্তি লাগে।</p>
                    <p>২. রক্তদানের পর স্বাস্থ্য খারাপ হয়ে যাবে - এটি ভুল ধারণা। আসলে রক্তদান করলে হৃদরোগের ঝুঁকি কমে এবং দেহে মাত্রাতিরিক্ত আয়রন বা লৌহ সঞ্চয় প্রতিরোধ করে।</p>
                    <p>৩. ডায়াবেটিসে আক্রান্ত ব্যক্তি রক্ত দিতে পারবে না - এটিও ভুল ধারণা। স্বাস্থ্য পরীক্ষায় যোগ্য বিবেচিত হলে, ডায়াবেটিসে আক্রান্ত ব্যক্তি ততক্ষণ রক্ত দান করতে পারবেন, যতক্ষণ ওই ব্যক্তির রক্তের গ্লুকোজ লেভেল স্বীকৃত সীমার মধ্যে থাকবে।</p>
                    <p>৪. উচ্চরক্তচাপের কারণে রক্তদান করা যায় না - এটিও ভুল ধারণা। রক্তদানের সময় ব্লাডপ্রেসার ১৮০সিষ্টোলিক ও ১০০ডায়াষ্টোলিকের মাঝে থাকলে রক্ত দেওয়া যায়।</p>
                    <p>৫. রক্তদানের পর আপনি কোনো প্রকার অসস্থি বোধ করবেন না কিংবা অজ্ঞান হয়ে যাবেন না। এই ব্যাপারে অনেকের ভুল ধারণা রয়েছে।</p>

                </div>
            </div>
        </div>
    </section>
    <section className="pt-5 bg-danger-subtle pb-5">
        <div className="container">
            <h3 className="text-center">Top Doners</h3>
            <p className="text-center text-muted">Explore Our Doners</p>

            <div className="row mt-5">
                <div className="col-12 col-md-4 col-lg-3 mb-4">
                    <div className="card">
                        <img className="img-fluid card-img-top" src="./images/mohib.jpg" alt=""/>
                        <div className="card-body text-center">
                            <h4 className="card-title">Naim Hossen</h4>
                            <p className="card-text">A+</p>
                            <div className="card-details text-start">
                                <p>Address: </p>
                                <p>Number: </p>
                                <p>Email: </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className="col-12 col-md-4 col-lg-3 mb-4">
                    <div className="card">
                        <img className="img-fluid card-img-top" src="./images/mohib.jpg" alt=""/>
                        <div className="card-body text-center">
                            <h4 className="card-title">Naim Hossen</h4>
                            <p className="card-text">A+</p>
                            <div className="card-details text-start">
                                <p>Address: </p>
                                <p>Number: </p>
                                <p>Email: </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4 col-lg-3 mb-4 d-none d-sm-block d-md-block d-lg-block">
                    <div className="card">
                        <img className="img-fluid card-img-top" src="./images/mohib.jpg" alt=""/>
                        <div className="card-body text-center">
                            <h4 className="card-title">Naim Hossen</h4>
                            <p className="card-text">A+</p>
                            <div className="card-details text-start">
                                <p>Address: </p>
                                <p>Number: </p>
                                <p>Email: </p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-lg-3 mb-4 d-none d-sm-block d-md-block d-lg-block">
                    <div className="card">
                        <img className="img-fluid card-img-top" src="./images/mohib.jpg" alt=""/>
                        <div className="card-body text-center">
                            <h4 className="card-title">Naim Hossen</h4>
                            <p className="card-text">A+</p>
                            <div className="card-details text-start">
                                <p>Address: </p>
                                <p>Number: </p>
                                <p>Email: </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5">
                <a className="btn btn-danger" href="/doners">All Doners</a>
            </div>
        </div>
    </section>


    <section className="pb-5 mt-5">
        <div className="container">
            <h3 className="text-center mb-5">Satisfaction</h3>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-4 mb-4">
                    <div className="card text-center d-flex align-items-center p-5">
                        <img className="card-img-top w-50" src="./images/rating.png" alt="Title"/>
                        <div className="card-body mt-5">
                            <h4 className="card-title">Doners</h4>
                            <p className="card-text text-muted">2500</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-4">
                    <div className="card text-center d-flex align-items-center p-5">
                        <img className="card-img-top w-50" src="./images/love.png" alt="Title"/>
                        <div className="card-body mt-5">
                            <h4 className="card-title">Happy People</h4>
                            <p className="card-text text-muted">2500</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 mb-4">
                    <div className="card text-center d-flex align-items-center p-5">
                        <img className="card-img-top w-50" src="./images/crm.png" alt="Title"/>
                        <div className="card-body mt-5">
                            <h4 className="card-title">Contact</h4>
                            <p className="card-text text-muted">2500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="mt-5">

        <footer className="text-white text-center text-lg-start bg-secondary">
            <div className="container p-4">
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4">About company</h5>
            
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti.
                    </p>
            
                    <p>
                        Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                        molestias.
                    </p>
            
                    <div className="mt-4">
                        <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-facebook-f"></i></a>
                        <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-dribbble"></i></a>
                        <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-twitter"></i></a>
                        <a type="button" className="btn btn-floating btn-primary btn-lg"><i className="fab fa-google-plus-g"></i></a>
                    </div>
                    </div>
            
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4 pb-1">Address</h5>
        
            
                    <ul className="fa-ul" style={{marginLeft: "1.65em"}}>
                        <li className="mb-3">
                        <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">New York, NY 10012, US</span>
                        </li>
                        <li className="mb-3">
                        <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">info@example.com</span>
                        </li>
                        <li className="mb-3">
                        <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 01 234 567 88</span>
                        </li>
                        <li className="mb-3">
                        <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+ 01 234 567 89</span>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4">Opening hours</h5>
            
                    <table className="table text-center text-white">
                        <tbody className="font-weight-normal">
                        <tr>
                            <td>Mon - Thu:</td>
                            <td>8am - 9pm</td>
                        </tr>
                        <tr>
                            <td>Fri - Sat:</td>
                            <td>8am - 1am</td>
                        </tr>
                        <tr>
                            <td>Sunday:</td>
                            <td>9am - 10pm</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2023 Copyright:
            <a className="text-white" href="@">bloodbd</a>
            </div>
    </footer>
    
    </div>

    </div>
  )
}

export default Home;
