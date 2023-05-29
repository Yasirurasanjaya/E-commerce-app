import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <div>
            Soluta enim tenetur sed dolores autem ab ipsam quia. Deleniti et
            maiores incidunt cupiditate omnis sint quod aut fugiat. Totam
            voluptatibus corporis amet incidunt quis ut ullam vero molestiae.
            Laudantium et earum nesciunt sunt laborum molestiae quaerat.
            Consequatur pariatur est. Et autem reiciendis dolores eligendi culpa
            omnis nihil iure consectetur. Dolorem veritatis quos accusantium
            deleniti et iure ipsa velit commodi. Enim eos tempore. Et odio
            voluptas harum sit.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
          72511 Ledner Port
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: yasirurasanjaya@gmail.com
          </Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
