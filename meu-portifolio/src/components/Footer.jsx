/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="nav-links">
          <li className="links">
            <a
              href="https://github.com/F-Herbert"
              target="_blank"
              rel="noreferrer"
            >
              <GoMarkGithub />

            </a>
          </li>
          <li className="links">
            <a
              href="https://www.linkedin.com/in/felipe-herbert-294228199/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />

            </a>
          </li>
          <li className="links">
            <a
              href="https://www.instagram.com/felipe.herbert13/"
              target="_blank"
              rel="noreferrer"
            >
              <GrInstagram />

            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
