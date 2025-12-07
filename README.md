# Axys Authentication Trial Test

React Native authentication flow implementation for trial test evaluation.

## 🎯 Features Implemented

### Authentication Flows
- ✅ Complete 7-step signup flow
- ✅ Email/Phone login options
- ✅ Demo OTP verification
- ✅ Personal information collection
- ✅ PEP (Politically Exposed Person) check
- ✅ Residential address entry
- ✅ Password creation with validation
- ✅ PIN setup and confirmation

### User Experience
- ✅ English/Japanese localization
- ✅ Responsive design
- ✅ Form validation
- ✅ Progress indicators
- ✅ Error handling
- ✅ Smooth navigation

### Technical Implementation
- React Native 0.75
- React Navigation
- Context API for state management
- AsyncStorage for data persistence
- Modular component architecture

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run on Android
npm run android

# Run on iOS
npm run ios
\`\`\`

## 📱 Testing

### Demo OTP
The app uses demo OTP verification. Enter any 6-digit code to proceed.

### Test Flow
1. Launch app
2. Select language (EN/JP)
3. Create account with any email
4. Enter any 6-digit OTP
5. Complete personal information
6. Set password (must meet criteria)
7. Create 4-digit PIN
8. Access dashboard

## 🏗️ Architecture

\`\`\`
App/
├── Components/
│   ├── Createaccount/    # Signup flow screens
│   ├── Login/            # Login screen
│   ├── Createpin/        # PIN setup
│   ├── Dashboard/        # Main screen
│   └── Splash.js         # Splash screen
├── src/
│   ├── Translation/      # i18n files
│   └── Languagecontext.js # Language state
\`\`\`

## 🔐 Security Notes

- Demo mode for trial purposes
- Production would integrate with:
  - Supabase/Firebase for authentication
  - Biometric authentication
  - Secure token management
  - Session persistence

## 📝 Notes for Reviewers

**Completed:**
- All UI screens match Figma specifications
- Full navigation flow
- Form validations
- Localization system
- Clean, maintainable code

**Production Enhancements:**
- Backend integration (ready to implement)
- Biometric authentication
- Session management
- User data persistence

## 👤 Developer

**Zia**  
Senior Android Developer & Team Lead  
GitHub: [github.com/ziacto](https://github.com/ziacto)

## 📄 License

Trial test project - 2024