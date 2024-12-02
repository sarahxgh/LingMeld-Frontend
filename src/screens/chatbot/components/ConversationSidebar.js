import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import SidebarTag from './SidebarTag';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add'; // Icon for adding a conversation
import TextField from '@mui/material/TextField'; // Material UI TextField for the search bar
import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon
import { InputAdornment } from '@mui/material';

const initialConversations = [
  { name: 'Elmer Laverty', tags: ['Urgent', 'New'] },
  { name: 'Florencio Dorrance', tags: ['Important'] },
  { name: 'Lavern Laboy', tags: ['Follow-up'] },
  { name: 'Titus Kitamura', tags: [] },
  { name: 'Geoffrey Mott', tags: ['Completed'] },
  { name: 'Alfonzo Schuessler', tags: ['In Progress'] },
];

const ConversationSidebar = () => {
  const [open, setOpen] = useState(false);
  const [conversations, setConversations] = useState(initialConversations);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle the drawer state
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Handle adding a new conversation
  const handleAddConversation = () => {
    const newConversation = { name: 'New Conversation', tags: [] };
    setConversations([...conversations, newConversation]);
  };

  // Filter conversations based on search query
  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const DrawerList = (
    <Box
      sx={{
        width: 240,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
    >
      {/* Fixed Search Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
      <IconButton
        sx={{
          backgroundColor: '#b1f218',
          color: 'white',
          borderRadius: '50%',
          width: 25,
          height: 25,
          marginRight: 2, // Space between search and button
          '&:hover': {
            backgroundColor: '#0056b3',
          },
        }}
        aria-label="Add conversation"
      >
        <AddIcon sx={{ fontSize: '15px' }} /> {/* Larger "+" icon */}
      </IconButton>

      <TextField
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Search conversations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
            '& .MuiOutlinedInput-root': {
                borderRadius: '30px', // Round the corners
                backgroundColor: '#f3f4f6', // Background color
                fontSize: '12px', // Smaller font size
                paddingRight: '8px', // Ensure space for the icon
                '& .MuiInputBase-input': {
                  paddingRight: '8px', // Ensure space for the icon
                },
                // Remove borders in all states (default, hover, focus)
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none', // Remove border
                },
                      },
            '& .MuiInputLabel-root': {
              fontSize: '12px', // Smaller label font size (if any)
            },
            '&.Mui-focused .MuiOutlinedInput-root': {
                backgroundColor: '#f3f4f6',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none', // Ensure no border on focus
                },
              },
              '&:hover .MuiOutlinedInput-root': {
                backgroundColor: '#f3f4f6',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none', // Ensure no border on hover
                },
              },
          }}
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: '18px' }} /> {/* Smaller icon size */}
            </InputAdornment>
          ),
        }}
      />
    </Box>


      {/* Scrollable conversation list */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', height: '100%' }}>
        <List>
          {filteredConversations.map((conversation, index) => (
            <ListItem key={index} disablePadding>
              <SidebarTag
                name={conversation.name}
                tags={conversation.tags} // Pass the tags here
              />
            </ListItem>
          ))}
        </List>
      </Box>

      
      <Divider />
    </Box>
  );

  return (
    <div>
      {/* Menu icon to open drawer on small screens */}
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: 'inline-flex', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      {/* Temporary drawer for small screens */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 250, height: '100vh' },
        }}
      >
        {DrawerList}
      </Drawer>

      {/* Persistent drawer for larger screens */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: 250,
            height: '100vh',
            position: 'relative', // Align properly
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default ConversationSidebar;
