import React, { useState, useEffect, useContext } from "react";

//import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

const OtherRelationLink = ({ user }) => {
  const location = useLocation();

  //destructuring pathname from location
  // const { pathname } = location;

  // //Javascript split method to get the name of the path in array
  // const splitLocation = pathname.split("/");

  const a = 1;
  useEffect(() => {
    //let controller = new AbortController();
  }, [a]);

  return (
    <>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <aside className="widget-area">
            <div className="widget widget-page-you-like">
              <h3 className="widget-title">My Maternal Links</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg1" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Chief Eze Nwannu</a>
                  </h4>
                  <span>1215 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg2" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <span>1865 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg3" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Fitness Club</a>
                  </h4>
                  <span>2051 Members</span>
                </div>
              </article>
            </div>
          </aside>
        </div>
        <div class="col-lg-3 col-sm-6">
          <aside className="widget-area">
            <div className="widget widget-page-you-like">
              <h3 className="widget-title">My Classmates</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg1" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Chief Eze Nwannu</a>
                  </h4>
                  <span>1215 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg2" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <span>1865 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg3" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Fitness Club</a>
                  </h4>
                  <span>2051 Members</span>
                </div>
              </article>
            </div>
          </aside>
        </div>
        <div class="col-lg-3 col-sm-6">
          <aside className="widget-area">
            <div className="widget widget-page-you-like">
              <h3 className="widget-title">My Neighbours</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg1" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Chief Eze Nwannu</a>
                  </h4>
                  <span>1215 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg2" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <span>1865 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg3" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Fitness Club</a>
                  </h4>
                  <span>2051 Members</span>
                </div>
              </article>
            </div>
          </aside>
        </div>
        <div class="col-lg-3 col-sm-6">
          <aside className="widget-area">
            <div className="widget widget-page-you-like">
              <h3 className="widget-title">My Colleagues</h3>

              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg1" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Chief Eze Nwannu</a>
                  </h4>
                  <span>1215 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg2" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <span>1865 Members</span>
                </div>
              </article>
              <article className="item">
                <a href="#" className="thumb">
                  <span className="fullimage bg3" role="img"></span>
                </a>

                <div className="info">
                  <h4 className="title">
                    <a href="#">Fitness Club</a>
                  </h4>
                  <span>2051 Members</span>
                </div>
              </article>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default OtherRelationLink;
