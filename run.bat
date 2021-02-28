@echo off
:home
cls
color 5
echo.
type menu.txt
echo.
pause
set /p car=Enter Number:
if %car% == 1 goto tos 
if %car% == 2 goto login
if %car% == 3 goto acclogin
:tos
echo Hi the tos is stated below!
pause
exit
:login
cls
type carbanaro.txt
echo.
echo.
echo.
echo.
echo.
echo Please enter the voucher code provided to you upon purchase
set /p dud=Code:
if %dud% == D2QRr5Oc goto success
if %dud% == Tl9sFDvx goto success
if %dud% == UDv3e0aW goto success
if %dud% == AW6UuAq9 goto success
if %dud% == 3u4PLUTA goto success
if %dud% == vZNpGTok goto success
if %dud% == jKFuDw2t goto success
if %dud% == FzsdKj5a goto success
if %dud% == C7mBeht0 goto success
if %dud% == VeOfthyp goto success
if %dud% == iFFEnPnz goto success
if %dud% == ZpNqtbCY goto success
if %dud% == xsJWdWF5 goto success
if %dud% == tLfPpMaZ goto success
if %dud% == p73rKqaO goto success
if %dud% == LnNGY318 goto success
if %dud% == 9ZrxnaE9 goto success
if %dud% == 9eccNvfC goto success
if %dud% == qN5F46LU goto success
if %dud% == OwCMDYIc goto success
if %dud% == RmUNXIbW goto success
if %dud% == F7fQHlHT goto success
if %dud% == LoJmK2eq goto success
if %dud% == TbnqRYZo goto success
if %dud% == PJ9etdG9 goto success
if not %dud% == D2QRr5Oc goto Invalid
if not %dud% == Tl9sFDvx goto Invalid
if not %dud% == UDv3e0aW goto Invalid
if not %dud% == AW6UuAq9 goto Invalid
if not %dud% == 3u4PLUTA goto Invalid
if not %dud% == vZNpGTok goto Invalid
if not %dud% == jKFuDw2t goto Invalid
if not %dud% == FzsdKj5a goto Invalid
if not %dud% == C7mBeht0 goto Invalid
if not %dud% == VeOfthyp goto Invalid
if not %dud% == iFFEnPnz goto Invalid
if not %dud% == ZpNqtbCY goto Invalid
if not %dud% == xsJWdWF5 goto Invalid
if not %dud% == tLfPpMaZ goto Invalid
if not %dud% == p73rKqaO goto Invalid
if not %dud% == LnNGY318 goto Invalid
if not %dud% == 9ZrxnaE9 goto Invalid
if not %dud% == 9eccNvfC goto Invalid
if not %dud% == qN5F46LU goto Invalid
if not %dud% == OwCMDYIc goto Invalid
if not %dud% == RmUNXIbW goto Invalid
if not %dud% == F7fQHlHT goto Invalid
if not %dud% == LoJmK2eq goto Invalid
if not %dud% == TbnqRYZo goto Invalid
if not %dud% == PJ9etdG9 goto Invalid
:success
color 2
echo Success! Your code has worked and Carbanaro is now activated. Press 1 to go back to the now activated carbanaro menu.
set /p mat=Enter Number:
if %mat% == 1 goto menu
if not %mat% == 1 goto menu
pause
:Invalid
color 4
echo Failed! The code entered is incorrect or has been used already.
pause
exit
:acclogin
cls
color 5
type carbanaro.txt
echo.
echo.
echo.
echo Sign-in: Please enter your username.
echo.
set /p loginuser=Username:
cd %userprofile%\documents\AccountBin\Profiles\
if not exist %loginuser% goto loginerror
goto lockcheck

:lockcheck
cls
cd %userprofile%\documents\AccountBin\Profiles\%loginuser%\LockedProfile
if exist "Yes".txt goto profilelocked
if not exist "Yes".txt goto continuelogging

:continuelogging
cls
color 5
type carbanaro.txt
echo.
echo.
echo.
echo Sign-in: Please enter your password.
echo.
set /p loginpass=Password:
cd %userprofile%\documents\AccountBin\Profiles\%loginuser%
if not exist %loginpass%.bat goto loginerror
echo %date% %time%>>LoggedLogins.txt
goto menu
pause
:loginerror
cls
type carbanaro.txt
echo.
echo.
echo.
color 4
echo Failed. The username or password is incorrect!
pause
goto home
:menu
cls
color 5
type carbanaro.txt
echo.
echo.
echo [1] start the bot!
echo.
echo [2] create a login for more efficiency
echo.
set /p nac=Enter Number:
if %nac% == 1 goto start
if %nac% == 2 goto signup
:signup
cls
color 5
type carbanaro.txt
echo.
echo.
echo.
echo Sign-up: Please enter a username.
echo.
set /p username=Username:

echo Sign-up: Please enter a password.
echo.
set /p password=Password:

if %password% == %username% goto nopassasuser
cd %userprofile%\documents\AccountBin\Profiles 
if exist "%username%" goto signuperror
if not exist "%username%" md %username%
cd %userprofile%\documents\AccountBin\Profiles\%username%
md LockedProfile
cd %userprofile%\documents\AccountBin\Profiles\%username%\LockedProfile
echo No>>No.txt
cd %userprofile%\documents\AccountBin\Profiles\%username%
echo %password%>>%password%.bat
echo %username%>>%username%.txt
echo Registered: %date% %time%>>LoggedLogins.txt
goto signupsuccess
pause
:signupsuccess
cls
color 5
echo Success! Your account has been created.
pause
goto home
:start
cls
color 5
set /p leave=The status is shown below!
type carbanaro.txt
echo.
echo.
type status.txt
echo.
echo.
echo.
call grunt build
node app.js
:status 
cls
color 5
type carbanaro.txt
echo.
echo.
echo.
echo.
echo.
type status.txt
echo.
echo.
pause

