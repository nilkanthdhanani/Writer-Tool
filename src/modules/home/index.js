import React, { useState } from 'react'
import './home.scss';
import herobanner from '../../assets/images/jpg/hero-banner.jpg';
import search from '../../assets/images/svg/search.svg';
import curve from '../../assets/images/svg/curve.svg';
import trending from '../../assets/images/jpg/trending.jpeg';
import person1 from '../../assets/images/png/person1.png';
import editor1 from '../../assets/images/png/editor1.png';
import editor2 from '../../assets/images/png/editor2.png';
import editor3 from '../../assets/images/png/editor3.png';
import editor4 from '../../assets/images/png/editor4.png';
import editor5 from '../../assets/images/png/editor5.png';
import uparrow from '../../assets/images/svg/uparrow.svg';
import person2 from '../../assets/images/png/person2.png';
import person3 from '../../assets/images/png/person3.png';
import person4 from '../../assets/images/png/person4.png';
import person5 from '../../assets/images/png/person5.png';
import person6 from '../../assets/images/png/person6.png';
import person7 from '../../assets/images/png/person7.png';
import person8 from '../../assets/images/png/person8.png';
import crossarrow from '../../assets/images/svg/crossarrow.svg';
import plus from '../../assets/images/svg/plus.svg';
import minus from '../../assets/images/svg/minus.svg';
import batch from '../../assets/images/svg/batch.svg';
import minusBox from '../../assets/images/svg/minusBox.svg';
import dots from '../../assets/images/svg/3dot.svg';

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    "Is it free to start a blog?",
    "How do blogs make money?",
    "Can you import blog posts from WordPress?",
    "Is Wix only for beginner bloggers?",
    "What should you blog about?"
  ];


  return (
    <div>
      <div className='hero-banner'>
        <div className="container">
          <div className="hero-banner-content">
            <div className="hbc-grid">
              <div className="hbc-grid1">
                <h1>The Writer Tools Blog Making
                  content Your Superpower</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry Lorem Ipsum been the industry's.</p>
                <div className="hbc-grid1-input">
                  <input type="text" placeholder='Search...' />
                  <div className="hbc-grid1-search">
                    <img src={search} alt="search" />
                  </div>
                </div>
                <div className="hbc-grid1-button">
                  <button>All</button>
                  <button>Health</button>
                  <button>Real Estate</button>
                  <button>Finance</button>
                  <button>AI Tools</button>
                  <button>Marketing</button>
                  <button>Blogging</button>
                </div>
              </div>
              <div className="hbc-grid2">
                <img src={herobanner} alt="herobanner" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="editor">
        <div className="container">
          <div className="editor-grid">
            <div className="editor-grid1">
              <h2>Editor's Pick</h2>
              <img src={curve} alt="curve" />
              <div className="editor-grid1-div">
                <div className="editor-grid1-div1">
                  <div className="trending-img">
                    <img src={trending} alt="trending" />
                    <div className="trending-ticket">
                      <span>Trending</span>
                    </div>
                  </div>
                  <div className="katen-box">
                    <div className="katen-box-profile">
                      <img src={person1} alt="person1" />
                      <span>Katen Doe</span>
                    </div>
                    <div className="katen-box-dot"></div>
                    <span>August 19, 2014</span>
                  </div>
                  <h3>Strategic UI/UX: Designing Impactful Experiences</h3>
                  <p>Lorem Ipsum is simply dummy text printing and typesetting industry Lorem Ipsum been the industry is Ipsum is simply dummy...</p>
                </div>
                <div className="editor-grid1-div2">
                  <div className="editor-grid1-div2-box">
                    <div className="editors-img">
                      <img src={editor2} alt="editor2" />
                    </div>
                    <div className="editors-text">
                      <h4>Easy Ways To Learn Everything About Construction</h4>
                      <p>August 20, 2024</p>
                    </div>
                  </div>
                  <div className="editor-grid1-div2-box">
                    <div className="editors-img">
                      <img src={editor1} alt="editor1" />
                    </div>
                    <div className="editors-text">
                      <h4>Facts About Business That Will Help You Success</h4>
                      <p>August 20, 2024</p>
                    </div>
                  </div>
                  <div className="editor-grid1-div2-box">
                    <div className="editors-img">
                      <img src={editor3} alt="editor1" />
                    </div>
                    <div className="editors-text">
                      <h4>What Can You Do About Fashion Right Now</h4>
                      <p>August 20, 2024</p>
                    </div>
                  </div>
                  <div className="editor-grid1-div2-box">
                    <div className="editors-img">
                      <img src={editor4} alt="editor1" />
                    </div>
                    <div className="editors-text">
                      <h4>Easy Ways To Learn Everything About Construction</h4>
                      <p>August 20, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="editor-grid2">
              <div className="editor-grid2-div">
                <div className="trending-blogs">
                  <img src={uparrow} alt="uparrow" />
                  <h5>Trending blog’s</h5>
                </div>
                <div className="trending-blogs-box">
                  <div className="trending-blogs-box-person">
                    <img src={person2} alt="person2" />
                    <h6>Savannah Nguyen</h6>
                  </div>
                  <p>The Impact of Remote The Work and Me & My Children...</p>
                </div>
                <div className="trending-blogs-box">
                  <div className="trending-blogs-box-person">
                    <img src={person3} alt="person3" />
                    <h6>Bessie Cooper</h6>
                  </div>
                  <p>How to become a Senior Designer from an ex-Google...</p>
                </div>
                <div className="trending-blogs-box" id='last-tbb'>
                  <div className="trending-blogs-box-person">
                    <img src={person4} alt="person4" />
                    <h6>Albert Flores</h6>
                  </div>
                  <p>The Hardest Phrase in the World to Translate A Nice Cup of Tea...</p>
                </div>
                <div className="trending-blogs2">
                  <span>More Trending Blog’s</span>
                  <img src={crossarrow} alt="crossarrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="latest">
        <div className="container">
          <div className="latest-grid">
            <div className="latest-grid1">
              <h2>Latest Posts</h2>
              <img src={curve} alt="curve" />
              <div className="latest-grid1-div">
                <div className="latest-grid1-div-grid" id='lg1dg-first'>
                  <div className="profile-grid1">
                    <img src={editor5} alt="editor5" />
                  </div>
                  <div className="profile-grid2">
                    <div className="profile-box">
                      <div className="profile-box-profile">
                        <img src={person5} alt="person5" />
                        <span>Katen Doe</span>
                      </div>
                      <div className="profile-box-dot"></div>
                      <span>Trending</span>
                      <div className="profile-box-dot"></div>
                      <span>August 19, 2014</span>
                    </div>
                    <h3>60 Things To Immediately Do About Building</h3>
                    <p>The European languages members the same family. Their separate existence is a myth.…</p>
                    <div className="profile-icons">
                      <img src={batch} alt="batch" />
                      <img src={minusBox} alt="minusBox" />
                      <img src={dots} alt="dots" />
                    </div>
                  </div>
                </div>
                <div className="latest-grid1-div-grid">
                  <div className="profile-grid1">
                    <img src={editor4} alt="editor4" />
                  </div>
                  <div className="profile-grid2">
                    <div className="profile-box">
                      <div className="profile-box-profile">
                        <img src={person6} alt="person6" />
                        <span>Katen Doe</span>
                      </div>
                      <div className="profile-box-dot"></div>
                      <span>Trending</span>
                      <div className="profile-box-dot"></div>
                      <span>August 19, 2014</span>
                    </div>
                    <h3>60 Things To Immediately Do About Building</h3>
                    <p>The European languages members the same family. Their separate existence is a myth.…</p>
                    <div className="profile-icons">
                      <img src={batch} alt="batch" />
                      <img src={minusBox} alt="minusBox" />
                      <img src={dots} alt="dots" />
                    </div>
                  </div>
                </div>
                <div className="latest-grid1-div-grid">
                  <div className="profile-grid1">
                    <img src={editor1} alt="editor1" />
                  </div>
                  <div className="profile-grid2">
                    <div className="profile-box">
                      <div className="profile-box-profile">
                        <img src={person7} alt="person7" />
                        <span>Katen Doe</span>
                      </div>
                      <div className="profile-box-dot"></div>
                      <span>Trending</span>
                      <div className="profile-box-dot"></div>
                      <span>August 19, 2014</span>
                    </div>
                    <h3>60 Things To Immediately Do About Building</h3>
                    <p>The European languages members the same family. Their separate existence is a myth.…</p>
                    <div className="profile-icons">
                      <img src={batch} alt="batch" />
                      <img src={minusBox} alt="minusBox" />
                      <img src={dots} alt="dots" />
                    </div>
                  </div>
                </div>
                <div className="latest-grid1-div-grid" id='lg1dg-last'>
                  <div className="profile-grid1">
                    <img src={editor2} alt="editor2" />
                  </div>
                  <div className="profile-grid2">
                    <div className="profile-box">
                      <div className="profile-box-profile">
                        <img src={person8} alt="person8" />
                        <span>Katen Doe</span>
                      </div>
                      <div className="profile-box-dot"></div>
                      <span>Trending</span>
                      <div className="profile-box-dot"></div>
                      <span>August 19, 2014</span>
                    </div>
                    <h3>60 Things To Immediately Do About Building</h3>
                    <p>The European languages members the same family. Their separate existence is a myth.…</p>
                    <div className="profile-icons">
                      <img src={batch} alt="batch" />
                      <img src={minusBox} alt="minusBox" />
                      <img src={dots} alt="dots" />
                    </div>
                  </div>
                </div>
                <div className="load-more-button">
                  <button>Load More</button>
                </div>
              </div>
            </div>
            <div className="latest-grid2">
              <div className="latest-grid2-div1">
                <div className="latest-grid2-head">
                  <h3>Newsletter</h3>
                  <div className="latest-grid2-img">
                    <img src={curve} alt="curve" />
                  </div>
                  <span>Join 70,000 subscribers!</span>
                  <div className="latest-grid2-head-input">
                    <input type="email" placeholder='Email address...' />
                  </div>
                  <div className="latest-grid2-head-button">
                    <button>Sing up to Subscribe</button>
                  </div>
                  <p>By signing up, you agree to our <b>Privacy Policy</b></p>
                </div>
              </div>
              <div className="latest-grid2-div2">
                <div className="latest-grid2-head">
                  <h3>Tag Clouds</h3>
                  <div className="latest-grid2-img">
                    <img src={curve} alt="curve" />
                  </div>
                </div>
                <div className="latest-grid2-div2-button">
                  <button>#UI/UX Designing</button>
                  <button>#React</button>
                  <button>#Flutter</button>
                  <button>#History</button>
                  <button>#Lifestyle</button>
                  <button>#Learning</button>
                  <button>#Education</button>
                  <button>#Content</button>
                  <button>#Lifestyle</button>
                  <button>#Featured</button>
                  <button>#Trending</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-grid1">
              <h2>Frequently Asked Questions</h2>
              <img src={curve} alt="curve" />
              <div className="faq-grid1-div">
                <div className="faq-grid1-div-content">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-grid1-box">
                      <div onClick={() => toggleExpand(index)} className="faq-grid1-box-header">
                        <h3>{index + 1}. {faq}</h3>
                        <img src={expandedIndex === index ? minus : plus} alt="toggle" />
                      </div>
                      {expandedIndex === index && (
                        <div className="faq-grid1-box-content">
                          <p>Here is the detailed answer to the question: {faq}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
