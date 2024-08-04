import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware'

// Define your options as enums
export enum BackgroundColor {
    Light = 'Light',
    Dim = 'Dim',
    Dark = 'Dark',
}

export enum Font {
    TwitterChirp = 'Twitter Chirp',
    System = 'System',
    Inter = 'Inter',
}

export enum EmojiStyle {
    TwitterEmoji = 'Twitter emoji',
    SystemEmoji = 'System emoji',
}

export enum VerificationBadge {
    NoTick = 'NoTick',
    BlueTick = 'BlueTick',
    GoldTick = 'GoldTick',
}

export enum Theme {
    Light = 'Light',
    Dark = 'Dark',
    Dim = 'Dim',
}

interface UrlMetaData {
    title: string;
    description: string;
    image: string; // URL of the image
}

export interface TweetData {
    details: string;
    profilePicture: string;
    name: string;
    username: string;
    tweetText: string;
    time: string;
    date: string;
    verificationStatus: VerificationBadge;
    retweetsCount: number;
    quoteTweetsCount: number;
    bookmarkCount: number;
    viewCount: number;
    likesCount: number;
    theme?: Theme;
    isVerified: boolean;
    imageUrl: string; // URL of the image in the tweet
    urlMetaData: UrlMetaData; // Metadata for URL in the tweet
    backgroundColor: BackgroundColor;
    font: Font;
    emojiStyle: EmojiStyle;
    isPreviewMode: boolean;
    imagePreview?: string;
}

// Define a state 
interface TweetEditorState extends TweetData {
    // this is used for remounting the tweet editor component, since all the text editable works on defaultValues
    // the resetData was not working as expected, so this is a hack to remount the component
    id: string;

    // Add setters for the new items
    setDetails: (details: string) => void;
    setProfilePicture: (profilePicture: string) => void;
    setName: (name: string) => void;
    setUsername: (username: string) => void;
    setTweetText: (tweetText: string) => void;
    setTime: (time: string) => void;
    setDate: (date: string) => void;
    setVerificationStatus: (verificationStatus: VerificationBadge) => void;
    setViewCount: (viewCount: number) => void;
    setRetweetsCount: (retweetsCount: number) => void;
    setQuoteTweetsCount: (quoteTweetsCount: number) => void;
    setBookmarkCount: (bookmarkCount: number) => void;
    setLikesCount: (likesCount: number) => void;
    setTheme: (theme: Theme) => void;
    setIsVerified: (isVerified: boolean) => void;
    setImageUrl: (imageUrl: string) => void;
    setUrlMetaData: (urlMetaData: UrlMetaData) => void;
    setPreviewMode: (isPreviewMode: boolean) => void;
    setBackgroundColor: (backgroundColor: BackgroundColor) => void;
    setFont: (font: Font) => void;
    setEmojiStyle: (emojiStyle: EmojiStyle) => void;
    resetData: (data?: Partial<TweetData>) => void;
    setImagePreview: (imagePreview?: string) => void;
}

const defaultData = {
    id: new Date().toISOString(),
    details: '',
    profilePicture: '/assets/default-pfp.png',
    name: 'Linkedin Post Generator',
    username: 'Founder & CTO of KubeCloud • LinkedIn Top Voice 2024 • Advising startups around Cloud-Native stuff',
    tweetText: [
        "Hey there, Welcome to tweet generator ✨",
        "",
        "- You can edit anything you want by clicking on them",
        "- Move to the preview mode from the top bar",
        "- Checkout the preview and download your image in one-click",
    ].join('\n'),
    verificationStatus: VerificationBadge.BlueTick,
    time: '',
    date: new Date().toISOString(),
    retweetsCount: 0,
    quoteTweetsCount: 0,
    likesCount: 0,
    bookmarkCount: 0,
    viewCount: 0,
    isVerified: false,
    imageUrl: '',
    urlMetaData: { title: '', description: '', image: '' },
    backgroundColor: BackgroundColor.Light,
    font: Font.TwitterChirp,
    emojiStyle: EmojiStyle.TwitterEmoji,
    isPreviewMode: false,
    imagePreview: '',
}

// Create the Zustand store
export const useTweetEditorStore = create<TweetEditorState>()(
    persist(
        (set) => ({
            ...defaultData,
            setDetails: (details) => set({ details }),
            setProfilePicture: (profilePicture) => set({ profilePicture }),
            setName: (name) => set({ name }),
            setUsername: (username) => set({ username }),
            setTweetText: (tweetText) => set({ tweetText }),
            setTime: (time) => set({ time }),
            setDate: (date) => set({ date }),
            setVerificationStatus: (verificationStatus) => set({ verificationStatus }),
            setViewCount: (viewCount) => set({ viewCount }),
            setRetweetsCount: (retweetsCount) => set({ retweetsCount }),
            setQuoteTweetsCount: (quoteTweetsCount) => set({ quoteTweetsCount }),
            setBookmarkCount: (bookmarkCount) => set({ bookmarkCount }),
            setLikesCount: (likesCount) => set({ likesCount }),
            setTheme: (theme: Theme) => set({ theme }),
            setIsVerified: (isVerified) => set({ isVerified }),
            setImageUrl: (imageUrl) => set({ imageUrl }),
            setUrlMetaData: (urlMetaData) => set({ urlMetaData }),
            setPreviewMode: (isPreviewMode) => set({ isPreviewMode }),
            setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
            setFont: (font) => set({ font }),
            setEmojiStyle: (emojiStyle) => set({ emojiStyle }),
            resetData: (newData?: Partial<TweetData>) => set({ ...defaultData, ...(newData || {}), id: new Date().toISOString() }),
            setImagePreview: (imagePreview) => set({ imagePreview }),
        }),
        {
            name: 'tweet-data', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }));
