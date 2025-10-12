import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-elevated">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand summary */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex">
              <Image src="/mediaverse.png" alt="Mediaverse" width={160} height={32} />
            </Link>
            <p className="text-sm text-muted max-w-sm">
              Your all-in-one creative partner for visual storytelling, design, and web experiences. From cinematic event coverage to brands and websites that convert.
            </p>
            <div className="flex items-center gap-4 text-muted">
              <Link href="#" aria-label="Instagram" className="hover:text-text" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 0 1 1.78 1.153 4.92 4.92 0 0 1 1.153 1.78c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.153 1.78 4.92 4.92 0 0 1-1.78 1.153c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.78-1.153 4.92 4.92 0 0 1-1.153-1.78c-.163-.457-.347-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.153-1.78 4.92 4.92 0 0 1 1.78-1.153c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163Zm0 1.62c-3.16 0-3.527.012-4.767.069-1.02.047-1.574.216-1.943.36-.49.19-.84.418-1.206.784-.366.366-.594.716-.784 1.206-.144.37-.313.924-.36 1.943-.057 1.24-.069 1.607-.069 4.767s.012 3.527.069 4.767c.047 1.02.216 1.574.36 1.943.19.49.418.84.784 1.206.366.366.716.594 1.206.784.37.144.924.313 1.943.36 1.24.057 1.607.069 4.767.069s3.527-.012 4.767-.069c1.02-.047 1.574-.216 1.943-.36.49-.19.84-.418 1.206-.784.366-.366.594-.716.784-1.206.144-.37.313-.924.36-1.943.057-1.24.069-1.607.069-4.767s-.012-3.527-.069-4.767c-.047-1.02-.216-1.574-.36-1.943-.19-.49-.418-.84-.784-1.206a3.3 3.3 0 0 0-1.206-.784c-.37-.144-.924-.313-1.943-.36-1.24-.057-1.607-.069-4.767-.069Zm0 3.905a4.312 4.312 0 1 1 0 8.624 4.312 4.312 0 0 1 0-8.624Zm0 1.62a2.692 2.692 0 1 0 0 5.384 2.692 2.692 0 0 0 0-5.384Zm5.494-2.911a1.008 1.008 0 1 1 0 2.016 1.008 1.008 0 0 1 0-2.016Z"/></svg>
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-text" title="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M23.498 6.186a3.003 3.003 0 0 0-2.116-2.116C19.59 3.5 12 3.5 12 3.5s-7.59 0-9.382.57A3.003 3.003 0 0 0 .502 6.186C0 7.978 0 12 0 12s0 4.022.502 5.814a3.003 3.003 0 0 0 2.116 2.116C4.41 20.5 12 20.5 12 20.5s7.59 0 9.382-.57a3.003 3.003 0 0 0 2.116-2.116C24 16.022 24 12 24 12s0-4.022-.502-5.814ZM9.75 15.568V8.432L15.818 12 9.75 15.568Z"/></svg>
              </Link>
              <Link href="#" aria-label="Behance" className="hover:text-text" title="Behance">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M9.692 10.256c.846-.39 1.282-1.09 1.282-2.103 0-1.642-1.074-2.464-3.223-2.464H2v10.628h6.015c2.45 0 3.675-1.047 3.675-3.143 0-1.335-.666-2.24-1.998-2.704Zm-4.37-2.89h2.872c.9 0 1.351.379 1.351 1.137 0 .786-.45 1.18-1.351 1.18H5.322V7.366Zm2.93 6.9H5.322v-2.67h2.93c1.013 0 1.52.45 1.52 1.334 0 .9-.507 1.336-1.52 1.336ZM14.694 7.562h4.6v1.012h-4.6V7.562Zm7.053 4.245c-.192-1.313-.82-2.295-1.88-2.948-1.059-.655-2.368-.982-3.927-.982-1.927 0-3.41.535-4.45 1.604-1.042 1.07-1.562 2.475-1.562 4.216 0 1.927.61 3.41 1.83 4.45 1.218 1.04 2.866 1.56 4.94 1.56 1.283 0 2.394-.192 3.33-.578v-2.426c-.986.45-2.08.675-3.285.675-1.138 0-2.04-.243-2.705-.73-.666-.486-1.045-1.18-1.137-2.08h7.046c.02-.2.033-.538.033-1.012 0-.483-.024-.963-.076-1.45Zm-7.145.88c.097-.98.443-1.727 1.04-2.24.596-.515 1.416-.772 2.46-.772.984 0 1.747.257 2.29.772.545.513.85 1.26.916 2.24h-6.706Z"/></svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-text" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5ZM.5 8h4V23h-4V8Zm7.982 0h3.837v2.042h.054c.534-1.012 1.838-2.08 3.785-2.08 4.05 0 4.796 2.663 4.796 6.129V23h-4v-6.667c0-1.59-.028-3.633-2.214-3.633-2.217 0-2.555 1.733-2.555 3.524V23h-3.903V8Z"/></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted hover:text-text">Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted hover:text-text">About</Link></li>
              <li><Link href="/services" className="text-sm text-muted hover:text-text">Services</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted hover:text-text">Portfolio</Link></li>
              <li><Link href="/contact" className="text-sm text-muted hover:text-text">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/event-coverage" className="text-sm text-muted hover:text-text">Event Coverage</Link></li>
              <li><Link href="/services/camera-rentals" className="text-sm text-muted hover:text-text">Camera Rentals</Link></li>
              <li><Link href="/services/design" className="text-sm text-muted hover:text-text">Graphic & Brand Design</Link></li>
              <li><Link href="/services/video-editing" className="text-sm text-muted hover:text-text">Video Editing</Link></li>
              <li><Link href="/services/web" className="text-sm text-muted hover:text-text">Web Design & Development</Link></li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 mb-4">
              <li className="text-sm text-muted">Mediaverse Studio, Lagos, Nigeria</li>
              <li className="text-sm text-muted">+234 xxx xxx xxxx</li>
              <li className="text-sm text-muted">info@mediaverse.com</li>
            </ul>
            <form className="flex items-center gap-2">
              <input type="email" placeholder="Your email" className="flex-1 rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent" />
              <button className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white">Join</button>
            </form>
            <p className="mt-2 text-xs text-muted">By subscribing you agree to our Privacy Policy.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Mediaverse. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-muted hover:text-text">Privacy Policy</Link>
            <span className="text-border">|</span>
            <Link href="#" className="text-muted hover:text-text">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


