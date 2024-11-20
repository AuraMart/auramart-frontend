import React from "react";
import { Box, Stack, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GooglePlayIcon from "/path-to-your-icons/GooglePlayIcon";
// import AppStoreIcon from "/path-to-your-icons/AppStoreIcon";

const FooterSection = () => {
  return (
    <Box
      className="bg-gray-900 text-white mt-[4%] "
      px={{ xs: 3, sm: 10, l }}
      py={{ xs: 5, sm: 10 }}
    >
        <Stack direction="row" container spacing={5}>
          {/* Need Help Section */}
          <Stack item xs={12} sm={3}>
            <Typography variant="h6" className="font-bold">
              Need Help
            </Typography>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Career
                </Link>
              </li>
            </ul>
          </Stack>

          {/* Company Section */}
          <Stack item xs={12} sm={3}>
            <Typography variant="h6" className="font-bold">
              Company
            </Typography>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" underline="hover" color="inherit">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Euphoria Blog
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Euphoriastan
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Collaboration
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Media
                </Link>
              </li>
            </ul>
          </Stack>

          {/* More Info Section */}
          <Stack item xs={12} sm={3}>
            <Typography variant="h6" className="font-bold">
              More Info
            </Typography>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover" color="inherit">
                  Sitemap
                </Link>
              </li>
            </ul>
          </Stack>

          {/* Location Section */}
          <Stack item xs={12} sm={3} className="">
            <Typography variant="h6" className="font-bold">
              Location
            </Typography>
            <Stack className="mt-4 space-y-4">
            <Typography variant="body2" className="mt-4">
              support@euphoria.in
            </Typography>
            <Typography variant="body2" className="mt-2">
              No 27, Katubedda, Moratuwa
            </Typography>
            <Typography variant="body2" className="mt-2">
              New House Colombo 7
            </Typography>
            </Stack>
          </Stack>
        </Stack>
      {/* Social Media and Apps */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className="mt-10"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        {/* Social Icons */}
        <Box>
          <IconButton>
            <FacebookIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <InstagramIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <TwitterIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon style={{ color: "white" }} />
          </IconButton>
        </Box>

        {/* App Links */}
        <Box display="flex" gap={2} mt={{ xs: 3, sm: 0 }}>
          {/* <img src="/assets/google-play.png" alt="Google Play" className="w-32" /> */}
          {/* <img src="/assets/app-store.png" alt="App Store" className="w-32" /> */}
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box className="mt-10 text-center border-t border-gray-700 pt-4">
        <Typography variant="body2" className="text-gray-400">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterSection;
