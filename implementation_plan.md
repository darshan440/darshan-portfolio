# Fix Suggested Users Display and Horizontal Scroll

Fix the layout and data mapping for "Suggested for you" to ensure it displays correctly across all devices with a modern, horizontal-scrolling interface.

## User Review Required
> [!IMPORTANT]
> The current data mapping was incorrect (mismatched keys), which caused the cards to appear empty or broken. I am fixing the mapping and updating the layout for horizontal scrolling.

## Proposed Changes

### [Home Suggestions Component]

#### [MODIFY] [HomeSuggestions.jsx](file:///c:/Projects/polzet/testpolzet-frontend-react/src/components/suggestions/HomeSuggestions.jsx)
- Fix data mapping to match `HomeSuggestedCard` expectations (`full_name`, `username`, `avatar_url`).
- Update container styling to use a modern dark glassmorphism theme (matching the user's screenshots).
- Ensure horizontal scroll container has `flexShrink: 0` for its children.
- Hide scrollbar but keep functionality.

#### [MODIFY] [HomeSuggestedCard.jsx](file:///c:/Projects/polzet/testpolzet-frontend-react/src/components/suggestions/HomeSuggestedCard.jsx)
- Ensure the card has a fixed width and `flexShrink: 0` to prevent squeezing in the horizontal stack.
- Update card styling to be more premium/glassy.
- Correct key usage for avatar and name.

## Verification Plan

### Manual Verification
- View Home page on laptop: Verify Suggested Users appear in a horizontal row and can be scrolled right.
- View Home page on mobile: Verify Suggested Users appear as complete cards in a horizontal row (not stacked or squeezed) and can be scrolled right.
- Verify user data (name, username, avatar) is correctly displayed.
