(function(){
  const visitFrame = document.createElement('iframe')
  visitFrame.setAttribute('style', 'display:none')
  visitFrame.setAttribute('id', 'fbx-visit')
  visitFrame.setAttribute('height', 0)
  visitFrame.setAttribute('width', 0)
  document.body.appendChild(visitFrame)

  const urlParams = new URLSearchParams(window.location.search)
  const domainOverride = urlParams.get('override_app_domain')
  const urlBase = domainOverride || 'https://app.fundbox.com'
  urlParams.set('referer', document.referrer)

  const url = new URL(window.location.href)
  const variantId = window.ub && window.ub.page && window.ub.page.variantId
  if (variantId) {
    url.searchParams.set('variant_id', variantId)
  }
  urlParams.set('url', url.toString())

  const iframeSrc = urlBase + '/visit?' + urlParams
  visitFrame.setAttribute('src', iframeSrc)
})()
