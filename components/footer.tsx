import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass border-t w-full">
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Amana<span className="text-primary">™</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Innovate. Integrate. Elevate.
              <br />
              Crafting seamless solutions for tomorrow.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">
              Here We Are
            </h4>
            <address className="text-sm sm:text-base text-muted-foreground not-italic">
              Block-1, Road-4, House-418
              <br />
              Bashundhara R/A, Dhaka-1229
            </address>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm sm:text-base text-muted-foreground">
              Do you want to speak with us?
              <br />
              <a
                href="mailto:me.alaminrifat@gmail.com"
                className="text-primary hover:underline"
              >
                me.alaminrifat@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">
              Follow us
            </h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t text-center text-sm sm:text-base text-muted-foreground">
          <p>© 2025 - Amana Tech™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
