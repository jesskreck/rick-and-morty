Source for sticky Navbar: https://www.ibrahima-ndaw.com/blog/build-a-sticky-nav-with-react/

(note: this might come in handy if navbar is making problems:

    scroll listener was not getting removed when component was unmounted. I used useCallback for fixing it:

        const scrollHandler = useCallback(() => {
        debounce(handleScroll())
        }, [])

        useEffect(() => {
        if (location.pathname === '/') {
        window.addEventListener("scroll", scrollHandler)
        return () => {
        window.removeEventListener("scroll", scrollHandler)
        }
        }
        }, [debounce, handleScroll]);

)
