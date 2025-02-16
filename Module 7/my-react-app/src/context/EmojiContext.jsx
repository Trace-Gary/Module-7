import React, {useContext, useState, createContext} from "react"

// 1. Create the context
const EmojiContext = createContext();

// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>

    //use top level...
export const EmojiProvider = ({ children }) => {
    const [emoji, setEmoji] = useState('😊');

    // sets emoji object in state, shared via context
    const handleUpdateEmoji = (newEmoji) => {
        setEmoji(newEmoji);
        
}

    //switched emoji
    const handleSwitchEmoji = () => {
        setEmoji((prevEmoji) => (prevEmoji === '😊' ? '😒' : '😊'));
    }
    
    // 2. Provide the context.
    // The Provider component of any context (UserContext.Provider)
    // sends data via its value prop to all children at every level.
    // We are sending both the current user and an update function

    return (
        <EmojiContext.Provider value={{ emoji, handleUpdateEmoji, handleSwitchEmoji }}>
            {children}
        </EmojiContext.Provider>
    );
}
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component

export const useEmojiContext = () => {
return useContext(EmojiContext);
}

// Save as EmojiContext.jsx in a separate 'context' folder