echo off
:update
cls
cls
color 5
echo.
type carbanaro.txt
echo.
echo.
echo.
echo Please wait while your files are being updated.
call git pull https://github.com/dessa123107/carbanaro-selfbot
pause
exit